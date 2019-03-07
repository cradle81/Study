package kr.or.tta.jungwon.service;

import java.util.List;

import kr.or.tta.jungwon.vo.BMTUser;;

public interface BMTUserService {
	
	public List<BMTUser> selectAllBMTUser();
	public List<BMTUser> selectAllNameAndEmail();
	public BMTUser selectOneBMTUser(int id);
}
