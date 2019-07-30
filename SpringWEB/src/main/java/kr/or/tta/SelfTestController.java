package kr.or.tta;

import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import kr.or.tta.jungwon.repository.PositionWeightRepository;
import kr.or.tta.jungwon.repository.QuestionRepository;
import kr.or.tta.jungwon.repository.RankWeightRepository;
import kr.or.tta.jungwon.repository.ResultStoreRepository;
import kr.or.tta.jungwon.repository.WorkTaskWeightRepository;
import kr.or.tta.jungwon.service.BMTUserService;
import kr.or.tta.jungwon.service.SelfTestService;
import kr.or.tta.jungwon.vo.PositionWeightVO;
import kr.or.tta.jungwon.vo.QuestionVO;
import kr.or.tta.jungwon.vo.RankWeightVO;
import kr.or.tta.jungwon.vo.ResultScoreVO;
import kr.or.tta.jungwon.vo.STQuestionVO;
import kr.or.tta.jungwon.vo.WorkTaskWeightVO;

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
	
	@Autowired
	QuestionRepository qRepo;
	
	@Autowired
	PositionWeightRepository pwRepo;

	@Autowired
	RankWeightRepository rwRepo;
	
	@Autowired
	WorkTaskWeightRepository wtwRepo;
	
	@Autowired
	ResultStoreRepository rsRepo;	
	
	
    @Transactional        
	@RequestMapping(value = "/question.do", method = {RequestMethod.GET, RequestMethod.POST},
			produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody JSONObject getTDQuestion(@RequestParam(required = false) Map param){

    	 List<QuestionVO> question;
    	 
    	 if (param.isEmpty())
    	 {
    		 question = qRepo.findAll();		
    	 }
    	 else
    	 {
    		 String code = (String)param.get("code");
    		 question = qRepo.findByCode(code);
    	 }

	    JSONObject resObj = new JSONObject();	
	    resObj.put("data", question); 
    	return resObj;
    }
    
    @Transactional        
	@RequestMapping(value = "/positionWeight.do", method = {RequestMethod.GET, RequestMethod.POST},
			produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody JSONObject getPositionWeight(@RequestParam(required = false) Map param){

    	 List<PositionWeightVO> pws;
    	 

    	 pws = pwRepo.findAll();		



	    JSONObject resObj = new JSONObject();	
	    resObj.put("data", pws); 
    	return resObj;
    }    

    @Transactional        
	@RequestMapping(value = "/workTaskWeight.do", method = {RequestMethod.GET, RequestMethod.POST},
			produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody JSONObject getWorkTaskWeight(@RequestParam(required = false) Map param){

    	 List<WorkTaskWeightVO> wtws;
    	 

    	 wtws = wtwRepo.findAll();		



	    JSONObject resObj = new JSONObject();	
	    resObj.put("data", wtws); 
    	return resObj;
    }    
    
    @Transactional        
	@RequestMapping(value = "/rankWeight.do", method = {RequestMethod.GET, RequestMethod.POST},
			produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody JSONObject getRankWeight(@RequestParam(required = false) Map param){

    	 List<RankWeightVO> rws;
    	 

    	 rws = rwRepo.findAll();		



	    JSONObject resObj = new JSONObject();	
	    resObj.put("data", rws); 
    	return resObj;
    }    

    @Transactional        
	@RequestMapping(value = "/resultStoreList.do", method = {RequestMethod.GET, RequestMethod.POST},
			produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody JSONObject getResultStoreList(@RequestParam(required = false) Map param){

    	 List<ResultScoreVO> rss;
    	 

    	 rss = rsRepo.findAll();		



	    JSONObject resObj = new JSONObject();	
	    resObj.put("data", rss); 
    	return resObj;
    }        
	
	//
	@RequestMapping(value = "getSTQuestion.do", method = {RequestMethod.GET, RequestMethod.POST})
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
