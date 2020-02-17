package kr.or.tta.jungwon.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import kr.or.tta.jungwon.dao.ScheduleJobDAO;
import kr.or.tta.jungwon.service.ScheduleJobService;
import kr.or.tta.jungwon.vo.ScheduleJobVO;

@Service("scheduleJobService")
public class ScheduleJobServiceImpl implements ScheduleJobService {

	@Resource(name="scheduleJobDAO")
	private ScheduleJobDAO scheduleJobDAO; 
	@Override
	public void insert(ScheduleJobVO job) {
		// TODO Auto-generated method stub
		scheduleJobDAO.insert(job);

	}

	@Override
	public void delete(String threadName) {
		// TODO Auto-generated method stub
		scheduleJobDAO.delete(threadName);

	}

	@Override
	public List<ScheduleJobVO> selectAllScheduleJob() {
		// TODO Auto-generated method stub
		return scheduleJobDAO.selectAllScheduleJob();
	}

}
