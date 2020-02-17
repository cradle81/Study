package kr.or.tta;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.or.tta.jungwon.repository.BMTUserRepository;
import kr.or.tta.jungwon.vo.BMTUser;



@RestController
public class LoginContoller {
	
	@Autowired
	BMTUserRepository bmtUserRepo;
	
	@RequestMapping(value="/loginInfo")
	public Map<String,Object> loginInfo(BMTUser param, HttpServletRequest request){
		
		Map<String,Object> result = new HashMap<String,Object>();
		
		BMTUser session = (BMTUser) request.getSession().getAttribute("user");
		
		System.out.println(session);
		
		//user 조회
		BMTUser user= bmtUserRepo.findOne(param.getId());
		if (user == null){
			result.put("code", 999);
			result.put("msg","사용자가 없습니다.");
		}
		else{
			result.put("code", 200);
		 	result.put("BMTUser",user);
		 	request.getSession().setAttribute("user", user); 
			
		}	
		return result; 
	}
	  
	@RequestMapping(value="/fail")
	public Map<String,Object> fail(){
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("code", 999);
		return result;
	}
	
	

}
