package kr.or.tta.jungwon.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.or.tta.jungwon.vo.QuestionVO;

public interface QuestionRepository extends JpaRepository<QuestionVO, String>{

	List<QuestionVO> findByCode(String code);
}
