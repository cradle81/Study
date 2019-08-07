package kr.or.tta.jungwon.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.or.tta.jungwon.vo.AnswerVO;
import kr.or.tta.jungwon.vo.QuestionVO;

public interface AnswerRepository  extends JpaRepository<AnswerVO, String>{

	//List<AnswerVO> findByQuestion(QuestionVO qkey);
	List<AnswerVO> findByQkey(String qkey);
}
