package kr.or.tta.jungwon.dao;

import java.util.List;

import kr.or.tta.jungwon.vo.BMTUser;

public interface BMTUserDAO {
	public List<BMTUser> selectAllBMTUser();
	public List<BMTUser> selectAllNameAndEmail();
	public BMTUser selectOneBMTUser(int id);
	
}
