package kr.or.tta.jungwon.repository;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import kr.or.tta.jungwon.SpringTestSupport;
import kr.or.tta.jungwon.vo.TDAnswerVO;
import kr.or.tta.jungwon.vo.TDQuestionVO;

@RunWith(SpringJUnit4ClassRunner.class)
public class TDQuestionTEST extends SpringTestSupport {

	
	@Autowired
	TDQuestionRepository tdqRepo;
	TDAnswerRepository tdaRepo;

	@Test
	@Transactional
	public void testTDQuestionRepository() {
		
		 List<TDQuestionVO> tdqVO = tdqRepo.findAll();		 
		 for (TDQuestionVO tdq : tdqVO)
		 {
			 System.out.println(tdq.getAnswers());
		 }
		 
		//System.out.println(tdqVO);
		 
		 
	}

/*	@Test
	@Transactional
	public void testTDAnswerRepository() {
		
		 List<TDAnswerVO> tdaVO = tdaRepo.findAll();		 
		 
		 System.out.println(tdaVO);
	}*/
}
