package kr.or.tta.jungwon.dao;

import java.util.List;

import kr.or.tta.jungwon.vo.Machine;
import kr.or.tta.jungwon.vo.STQuestionVO;

public interface STQuestionDAO {
	public List<STQuestionVO> selectAllSTQuestions();
	public STQuestionVO selectOneQuestion(String qno);	
}
