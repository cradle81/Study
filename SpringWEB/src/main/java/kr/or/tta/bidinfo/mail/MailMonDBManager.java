package kr.or.tta.bidinfo.mail;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;

import kr.or.tta.jungwon.service.EmpSerivce;
import kr.or.tta.jungwon.service.ScheduleJobService;
import kr.or.tta.jungwon.vo.MonInfo;
import kr.or.tta.jungwon.vo.ScheduleJobVO;

@Component
public class MailMonDBManager implements MailMonManagerInterface {
	  
	@Autowired
    ScheduleJobService scheduleJobService; 

	private HashMap <String, MailMonitorThread> list = new HashMap<String, MailMonitorThread>();
	private static final Logger logger = LoggerFactory.getLogger(MailMonDBManager.class);

 
	@Override
	public void add(String threadName, MailMonitorThread t) {
		// TODO Auto-generated method stub
		list.put(threadName,t);
		
		//insertDB
		ScheduleJobVO sjvo = new ScheduleJobVO(threadName,t.getMonInfo());
		scheduleJobService.insert(sjvo);
	}

	@Override
	public void delete(String threadName) {
		// TODO Auto-generated method stub
		list.remove(threadName);
		scheduleJobService.delete(threadName);

	}

	@Override
	public HashMap getList() {
		// TODO Auto-generated method stub
		return list;
	}
	public JSONObject getJsonList()
	{
		JSONObject resObj = new JSONObject();
		JSONArray jsonArrayRows = new JSONArray();
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy/M/d H:m:s"); 
		
		for (Map.Entry<String, MailMonitorThread> entry: list.entrySet())
		{		
			
			MailMonitorThread t = entry.getValue();
			MonInfo monInfo = t.getMonInfo();
			JSONObject item = new JSONObject();
			String endDate = sdf.format(monInfo.getEndDate());
			
			item.put("threadName", t.getName());
			item.put("instName", monInfo.getInstName()); 
			item.put("keyword", monInfo.getKeyword());
			if (monInfo.getSearchType().equals("p"))
			{
				item.put("searchType","사전공고");
			}
			else if (monInfo.getSearchType().equals("t"))
			{
				item.put("searchType","본공고");
			}
			item.put("endDate", endDate);
			item.put("emails", monInfo.getNameList());
			
			logger.info("ThreadName = {}, instName={}",t.getName(),monInfo.getInstName());			
			logger.info("keyword = {} , endDate ={}", monInfo.getKeyword(), endDate) ;
			logger.info("names ={}", monInfo.getNameList()) ;
			jsonArrayRows.add(item);
 
		}
		resObj.put("data", jsonArrayRows);
		return resObj;
	}
	public void runMon(MonInfo mon)
	{
		 MailMonitorThread t= new MailMonitorThread(this,mon);
		 SimpleDateFormat sdf = new SimpleDateFormat("yyyyMdHms"); 
		 String time = sdf.format(new Date());
		 t.setName(time+"-"+"MainMonThread");
		 t.start();		 		 
		 this.add(t.getName(),t);		
	}	
}
