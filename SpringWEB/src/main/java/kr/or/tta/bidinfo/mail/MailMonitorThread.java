package kr.or.tta.bidinfo.mail;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Iterator;
import java.util.StringTokenizer;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import kr.or.tta.bidinfo.URLConnection;
import kr.or.tta.jungwon.vo.MonInfo;

public class MailMonitorThread extends Thread{
	
    public MonInfo mon;
    private MailMonManagerInterface manager;

    final int interval = 60000;
    
    int currentCnt=0;
    LocalDateTime currentTime=null;
    
    Date endDate;
    
    private static final Logger logger = LoggerFactory.getLogger(MailMonitorThread.class);
    
	public MailMonitorThread(MailMonManagerInterface manager,MonInfo mon)
	{	
		this.mon = mon;
		this.manager=manager;
	}
	public String updateToday()
	{			
		Date d = new Date();
		String s = d.toString();
		System.out.println("현재날짜 : "+ s);
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy/M/d");			
		String updateDate = sdf.format(d);
		return updateDate;
	}
	
	public MonInfo getMonInfo()
	{
		return mon;
	}
	
	public void run() 
	{

		//파라미터 가져오기
		String keyword = mon.getKeyword();
		String instName = mon.getInstName();					  
		this.endDate = mon.getEndDate();
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy/M/d");
	    String fromDate= sdf.format(mon.getFromDate());
	    
	    //시간 업데이트
	    String toDate = this.updateToday();
	    
	    //초기화
	    URLConnection url = new URLConnection();		
	    boolean isSendMail=false;	    	   
	    JSONObject res;
	    
	    logger.info("SerachType={}",mon.getSearchType());
	    

	    		
	    
	    //초기 시간 업데이트함
	    	    

	    if (mon.getSearchType().equals("t"))
	    {
	    	res= url.getTbidListURL(fromDate, toDate, instName, keyword);
		    JSONArray items = (JSONArray) res.get("data");
		    JSONObject lastitem = (JSONObject)items.get(0);
	    	String temp=(String)lastitem.get("time");
	    	String time=temp.substring(0, temp.lastIndexOf("(")-1);
	    	System.out.println(time);
	    	
	    	currentTime = LocalDateTime.parse(time,DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm"));	    	
	    }
	    else 
	    {
	    	res= url.getPreStdPublishList(fromDate, toDate, instName, keyword);
	    	JSONArray items = (JSONArray) res.get("data");
		    JSONObject lastitem = (JSONObject)items.get(0);
	    	currentTime = LocalDateTime.parse((String)lastitem.get("time"),DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm"));
	    }

	    //초기 카운트 업데이트함	    
	    currentCnt = ((JSONArray)res.get("data")).size();
	    
	    logger.info("today={}",new Date());
	    logger.info("endDate={}",endDate);
	    
	    LocalDateTime tempTime;
	    
		while(true) //endDate까지 running해야 함
		{
		
			// 모니터링 기한이 만료되면 현재 스레드를 리스트상에 없애고 interrupt 시켜버린다.
			if(endDate.before(new Date()))
			{
				manager.delete(this.currentThread().getName());
			}
	 
			// Thread으로 대기하면서 조정 
			 try {
				    				   			 				   
				    toDate = this.updateToday();
					logger.info("CurrentTime ITEM = {}",currentTime);
				    if (mon.getSearchType().equals("t"))
				    {
				    	
				    	res= url.getTbidListURL(fromDate, toDate, instName, keyword);
					    JSONArray items = (JSONArray) res.get("data");
					    JSONObject lastitem = (JSONObject)items.get(0);
				    	String temp=(String)lastitem.get("time");
				    	String time=temp.substring(0, temp.lastIndexOf("(")-1);
				    	tempTime = LocalDateTime.parse(time,DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm"));
				    	logger.info("tempTime={}",tempTime);
				    }
				    else 
				    {
				    	res= url.getPreStdPublishList(fromDate, toDate, instName, keyword);
				    	JSONArray items = (JSONArray) res.get("data");
				    	JSONObject lastitem = (JSONObject)items.get(0);
				    	tempTime = LocalDateTime.parse((String)lastitem.get("time"),DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm"));
				    	logger.info("tempTime={}",tempTime);
				    }		 	    

				   /*
				   while(it.hasNext())
				   {
					  JSONObject item = (JSONObject) it.next();
					  String time = (String) item.get("time");
					  LocalDateTime tempTime = LocalDateTime.parse(time,DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm"));

				   }*/
				   
		    
				    logger.debug(res.toJSONString());				    
/*				    logger.info("current res count is ==> {} ", currentCnt);
				    logger.info("new     res count is ==> {} ", newCnt);
					if(Math.max(currentCnt, newCnt) > currentCnt )  //비교를 사이즈로 하는 것이 아니라, 시간을 가지고 체크를 해야 하지 않을까 함.//왜냐하면 시간이 지나면서 기존 엘레먼트들이 삭제될 수 있기에, 리스크 개수로 비교하게 되면 오차가 발생할 수 잇따.
					 {
						 isSendMail = true;
						 logger.info("update current res count : {} => {} ", currentCnt, newCnt);
						 currentCnt = newCnt;
					 }		*/	
				    
				    // 시간 베이스로 체크
				    logger.info("CURRENT TIME = {}",currentTime);				    
				    logger.info("NEW CURRENT TIME = {} ", tempTime);
				    
				    //공고날짜가 최신것이 들어오면
				    if(currentTime.isBefore(tempTime))
				    {
				    	isSendMail = true;
				    	logger.info("update currentTime res count : {} => {} ", currentTime, tempTime);
				    	currentTime=tempTime;
				    }
				    
					 	
					 
					 //메일보내기
					logger.info("isSendMail={}",isSendMail);
					 if (isSendMail)
					 {						 
						 SendMail se = new SendMail(res,this.getMonInfo());
						 se.sendMail();
						 isSendMail = false;
						 logger.info("3");
					 }
					 logger.info("4");
					 Thread.sleep(interval);	
	
			}
			 catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				break;
			}catch (Exception e)
			{
				e.printStackTrace();
			}
		}
	}

}
