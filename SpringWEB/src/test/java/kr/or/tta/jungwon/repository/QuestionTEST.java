package kr.or.tta.jungwon.repository;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import kr.or.tta.jungwon.SpringTestSupport;
import kr.or.tta.jungwon.vo.QuestionVO;
import kr.or.tta.jungwon.vo.TDQuestionVO;

public class QuestionTEST extends SpringTestSupport {

	
	@Autowired
	QuestionRepository qRepo;
	AnswerRepository aRepo;

	@Test
	@Transactional
	public void testTDQuestionRepository() {
		
		 List<QuestionVO> tdqVO = qRepo.findByCode("TD");		 
		 for (QuestionVO tdq : tdqVO)
		 {
			 System.out.println(tdq.getAnswers());
		 }

	}

}
