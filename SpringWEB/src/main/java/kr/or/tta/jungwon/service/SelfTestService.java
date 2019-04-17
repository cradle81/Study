package kr.or.tta.jungwon.service;

import java.util.List;

import kr.or.tta.jungwon.vo.STQuestionVO;
import kr.or.tta.jungwon.vo.ScheduleJobVO;

public interface SelfTestService {

		public List<STQuestionVO> selectAllSTQuestions();
		
}
