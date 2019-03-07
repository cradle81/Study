package kr.or.tta.jungwon.dao;

import java.util.List;

import kr.or.tta.jungwon.vo.ScheduleJobVO;


public interface ScheduleJobDAO {
	public void insert(ScheduleJobVO job);
	public void  delete(String threadName);
	public List<ScheduleJobVO> selectAllScheduleJob();

}
