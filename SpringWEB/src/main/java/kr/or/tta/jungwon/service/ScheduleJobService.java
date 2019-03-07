package kr.or.tta.jungwon.service;

import java.util.List;

import kr.or.tta.jungwon.vo.ScheduleJobVO;

public interface ScheduleJobService {
		public void insert(ScheduleJobVO job);
		public void  delete(String threadName);
		public List<ScheduleJobVO> selectAllScheduleJob();
}
