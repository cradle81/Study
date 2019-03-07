package kr.or.tta.jungwon.dao;

import java.util.List;

import kr.or.tta.jungwon.vo.Machine;

public interface MachineDAO {
	public List<Machine> selectAllMachines();
	public Machine selectOneMachine(String svrname);
	public List<Machine> selectTypeMachines(List param);	
	
}
