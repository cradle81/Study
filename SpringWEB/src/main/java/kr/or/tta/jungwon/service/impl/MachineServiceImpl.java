package kr.or.tta.jungwon.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import kr.or.tta.jungwon.dao.BMTUserDAO;
import kr.or.tta.jungwon.dao.MachineDAO;
import kr.or.tta.jungwon.service.MachineService;
import kr.or.tta.jungwon.vo.BMTUser;
import kr.or.tta.jungwon.vo.Machine;

@Service("machineService")
public class MachineServiceImpl implements MachineService {

	
	@Resource(name="machineDAO")
    private MachineDAO machineDAO; 
	
	@Override
	public List<Machine> selectAllMachines() {
		// TODO Auto-generated method stub
		return machineDAO.selectAllMachines();
	}
 
	@Override
	public Machine selectOneMahcine(String svrname) {
		// TODO Auto-generated method stub
		return machineDAO.selectOneMachine(svrname);
	}
	
	public List<Machine> selectTypeMachines(List param) {
		// TODO Auto-generated method stub
		return machineDAO.selectTypeMachines(param);
	}	

}
