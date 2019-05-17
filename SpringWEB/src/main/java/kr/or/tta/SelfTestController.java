package kr.or.tta;

import java.text.DateFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.apache.ibatis.javassist.bytecode.Descriptor.Iterator;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import kr.or.tta.jungwon.service.BMTUserService;

import kr.or.tta.jungwon.service.SelfTestService;
import kr.or.tta.jungwon.vo.*;

/**
 * Handles requests for the application home page.
 */
@RestController 
@RequestMapping(value = "/selftest")
public class SelfTestController {
	
	private static final Logger logger = LoggerFactory.getLogger(SelfTestController.class);
	
	 
	@Autowired
    BMTUserService bmtService;
	
	@Autowired
    SelfTestService  selfTestService; 
	
	
	//
	@RequestMapping(value = "getSTQuestion.do", method = RequestMethod.POST)
	public JSONObject getSTQuestions(@RequestParam(required = false) Map param, Locale locale)
	{

		
		List<STQuestionVO> stquestions;
		stquestions = selfTestService.selectAllSTQuestions();

		JSONObject resObj = new JSONObject();			
		JSONArray jsonArrayRows = new JSONArray();
		
		for (STQuestionVO question : stquestions)
		{			
	    	JSONObject item = new JSONObject();
	    	
	    	item.put("qno", question.getQno());
	    	item.put("question", question.getQuestion());
	    	
	    	jsonArrayRows.add(item);
		}
		
		resObj.put("data", jsonArrayRows); 
		logger.info(resObj.toJSONString());
					
		return resObj;
	}	
	//http://localhost:8080/tta/bidinfo/selftest/getSTQuestion.do
	@RequestMapping(value = "sendForm.do", method = RequestMethod.POST)
	public void submitSTFrom(@RequestBody Map<String, Object> params, Locale locale)
	{
	
		logger.info(params.toString()); 
	}		
	 
	
}
