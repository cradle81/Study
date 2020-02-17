package kr.or.tta.jungwon.repository;

import java.util.List;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import kr.or.tta.jungwon.SpringTestSupport;
import kr.or.tta.jungwon.vo.PositionWeightVO;
import kr.or.tta.jungwon.vo.RankWeightVO;
import kr.or.tta.jungwon.vo.ResultScoreVO;
import kr.or.tta.jungwon.vo.WorkTaskWeightVO;

public class QuestionTEST extends SpringTestSupport {

	
	@Autowired
	QuestionRepository qRepo;
	AnswerRepository aRepo;
	
	@Autowired
	PositionWeightRepository pwRepo;
	
	@Autowired
	RankWeightRepository rwRepo;
	
	@Autowired
	WorkTaskWeightRepository wtwRepo;
	
	@Autowired
	ResultStoreRepository rsRepo;	
	
	@Autowired
	BMTUserRepository bmtUserRepo;

	@Test
	@Transactional
	public void testTDQuestionRepository() {
		
/*		 List<QuestionVO> tdqVO = qRepo.findByCode("TD");		 
		 for (QuestionVO tdq : tdqVO)
		 {
			 System.out.println(tdq.getAnswers());
		 }*/
		 
		 //List<PositionWeightVO> pwVO = pwRepo.findAll();
		 //System.out.println(pwVO);
		 
		 
		 
		// RankWeightVO rw = new RankWeightVO("CODE", "TEST", 1,1, 1, 1, 1);
		// rwRepo.save(rw);
		 
		// List<RankWeightVO> rwVO = rwRepo.findAll();
		 
		// List<WorkTaskWeightVO> wtwVOs = wtwRepo.findAll();
		 
		 
		// List<ResultScoreVO> rsVOs = rsRepo.findAll();
		bmtUserRepo.findOne("jungwon_kim");
	}

}
