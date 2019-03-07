package kr.or.tta.jungwon.service;

import java.util.List;

import kr.or.tta.jungwon.vo.*;;

public interface MachineService {
	
	public List<Machine> selectAllMachines();
	public Machine selectOneMahcine(String id);
	public List<Machine> selectTypeMachines(List param);
}
