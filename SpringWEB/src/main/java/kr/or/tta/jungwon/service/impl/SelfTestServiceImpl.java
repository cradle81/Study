package kr.or.tta.jungwon.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import kr.or.tta.jungwon.dao.STQuestionDAO;
import kr.or.tta.jungwon.dao.ScheduleJobDAO;
import kr.or.tta.jungwon.service.SelfTestService;
import kr.or.tta.jungwon.vo.STQuestionVO;

@Service("selfTestService")
public class SelfTestServiceImpl implements SelfTestService {

	
	@Resource(name="stquestionDAO")
	private STQuestionDAO stquestionDAO; 
	
	@Override
	public List<STQuestionVO> selectAllSTQuestions() {
		// TODO Auto-generated method stub
		return 	stquestionDAO.selectAllSTQuestions();
	}

}
