package kr.or.tta.jungwon.vo;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString(exclude="answers")
//@JsonIdentityInfo(generator=ObjectIdGenerators.IntSequenceGenerator.class)
@JsonIdentityInfo(generator=ObjectIdGenerators.PropertyGenerator.class, property="qkey")
//answers의 qkey값(TDQuestionVO 오브젝트)을  qkey 맵버값으로 명시적으로 셋팅해준다.
@Getter
@Entity
@Table(name="tb_td_question")

public class TDQuestionVO implements Question {

	@Id
	@Column(length = 32)
	private String qkey;
	
	@Column(length = 32)
	private String qno;
	
	@Column(length = 32)
	private String code;
	
	@Column(length = 32)
	private String subcode;
	
	@Column()
	private double weight;
	
	@Column(length = 256)
	private String question;
	

	
	
	// @OneToMany (mappedBy="qkey") 
	@OneToMany (fetch=FetchType.EAGER) //부하를 많이 준다 //@Transactional 으로 제어하면 된다는데, 잘 안됨.
	@JoinColumn(name="qkey")
	@OrderBy("ano")
	private List<TDAnswerVO> answers;
	
    @Builder
    public TDQuestionVO(String qno, String code, String subcode, double weight, String question, String qkey) {
        this.qno = qno;
        this.question = question;
        this.code = code;
        this.subcode = subcode;
        this.weight = weight;
        this.qkey = qkey;
    }   
}
