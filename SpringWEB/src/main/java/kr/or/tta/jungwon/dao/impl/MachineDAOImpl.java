package kr.or.tta.jungwon.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.or.tta.jungwon.dao.MachineDAO;
import kr.or.tta.jungwon.vo.Machine;

@Repository("machineDAO")
public class MachineDAOImpl implements MachineDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;
	
	private String nameSpace = "kr.or.tta.jungwon.BMTMapper";
	
	@Override
	public List<Machine> selectAllMachines() {
		// TODO Auto-generated method stub
		List result = sqlSession.selectList(nameSpace+".selectAllMahcines");
		return result;		
	}

	@Override
	public Machine selectOneMachine(String svrname) {
		// TODO Auto-generated method stub
		Machine result = sqlSession.selectOne(nameSpace+".selectOneMachine", svrname);
		return result;		
	}
	@Override
	public List<Machine> selectTypeMachines(List param) {
		// TODO Auto-generated method stub
		
		HashMap hm = new HashMap();
		hm.put("machinelist", param);
		List result = sqlSession.selectList(nameSpace+".selectTypeMachines", hm);
		return result;		
	}	

}
