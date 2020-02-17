package kr.or.tta;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/api")
public class APIController {
	 
	private static final Logger logger = LoggerFactory.getLogger(APIController.class);
	@RequestMapping(value="/sessionCheck", method = RequestMethod.POST)
	public Map<String,Object>  sessionCheck() {
		
		logger.info("sessionCheck");
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("code",200);
		return result;
	}
}
