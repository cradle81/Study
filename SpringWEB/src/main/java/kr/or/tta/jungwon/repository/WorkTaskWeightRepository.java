package kr.or.tta.jungwon.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.or.tta.jungwon.vo.RankWeightVO;
import kr.or.tta.jungwon.vo.WorkTaskWeightVO;

public interface WorkTaskWeightRepository  extends JpaRepository<WorkTaskWeightVO, String>{


}
