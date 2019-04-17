package kr.or.tta.jungwon.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.or.tta.jungwon.dao.STQuestionDAO;
import kr.or.tta.jungwon.vo.STQuestionVO;

@Repository("stquestionDAO")
public class STQuestionDAOImpl implements STQuestionDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;
	
	private String nameSpace = "kr.or.tta.jungwon.BMTMapper";
	
	@Override
	public List<STQuestionVO> selectAllSTQuestions() {
		// TODO Auto-generated method stub
		List result = sqlSession.selectList(nameSpace+".selectAllSTQuestions");
		return result;			
	}

	@Override
	public STQuestionVO selectOneQuestion(String qno) {
		// TODO Auto-generated method stub
		STQuestionVO one = sqlSession.selectOne(nameSpace+".selectOneSTQuestion");
		return one;
	}	

}
