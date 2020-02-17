package kr.or.tta.jungwon.dao.impl;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.or.tta.jungwon.dao.ScheduleJobDAO;
import kr.or.tta.jungwon.vo.ScheduleJobVO;

@Repository("scheduleJobDAO")
public class ScheduleJobDAOImpl implements ScheduleJobDAO {

	@Autowired
	
	private SqlSessionTemplate sqlSession;
	
	private String nameSpace = "kr.or.tta.jungwon.BMTMapper";
	
	@Override
	public void insert(ScheduleJobVO job) {
		// TODO Auto-generated method stub
		
		sqlSession.insert(nameSpace+".insertScheduleJob",job);

	}

	@Override
	public void delete(String threadName) {
		// TODO Auto-generated method stub
		sqlSession.delete(nameSpace+".deleteScheduleJob",threadName);

	}

	@Override
	public List<ScheduleJobVO> selectAllScheduleJob() {
		// TODO Auto-generated method stub
		List result = sqlSession.selectList(nameSpace+".selectAllScheduleJob");
		return result;
		
	}

}
