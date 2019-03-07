package kr.or.tta.jungwon.dao.impl;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.or.tta.jungwon.dao.BMTUserDAO;
import kr.or.tta.jungwon.vo.BMTUser;
import kr.or.tta.jungwon.vo.EmpVO;

@Repository("bmtUserDAO")
public class BMTUserDAOImpl implements BMTUserDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;
	
	private String nameSpace = "kr.or.tta.jungwon.BMTMapper";
	
	@Override
	public List<BMTUser> selectAllBMTUser() {
		// TODO Auto-generated method stub
		List result = sqlSession.selectList(nameSpace+".selectAllBMTUser");
		return result;
	}

	@Override
	public BMTUser selectOneBMTUser(int id) {
		// TODO Auto-generated method stub
		
		BMTUser result=sqlSession.selectOne(nameSpace+".selectOneBMTUser", id);
		return result;
	} 

	@Override
	public List<BMTUser> selectAllNameAndEmail() {
		// TODO Auto-generated method stub
		
		List result=sqlSession.selectList(nameSpace+".selectAllNameNameEmail");
		return result;
	}

}
