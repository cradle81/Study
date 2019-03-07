package kr.or.tta.jungwon.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import kr.or.tta.jungwon.dao.BMTUserDAO;
import kr.or.tta.jungwon.dao.EmpDAO;
import kr.or.tta.jungwon.service.BMTUserService;
import kr.or.tta.jungwon.vo.BMTUser;

@Service("bmtService")
public class BMTUserServiceImpl implements BMTUserService {

	@Resource(name="bmtUserDAO")
    private BMTUserDAO bmtUserDAO;
	@Override
	public List<BMTUser> selectAllBMTUser() {
		// TODO Auto-generated method stub
		return bmtUserDAO.selectAllBMTUser();
	}

	@Override
	public BMTUser selectOneBMTUser(int id) {
		// TODO Auto-generated method stub
		return bmtUserDAO.selectOneBMTUser(id);
		
	}
	@Override
	public List<BMTUser> selectAllNameAndEmail() {
		// TODO Auto-generated method stub
		return bmtUserDAO.selectAllNameAndEmail();
		
	}

}
