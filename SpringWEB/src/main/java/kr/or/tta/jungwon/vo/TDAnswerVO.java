package kr.or.tta.jungwon.vo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import kr.or.tta.jungwon.vo.TDQuestionVO.TDQuestionVOBuilder;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString
@Getter
@Entity
@Table(name="tb_td_answer")
public class TDAnswerVO {

	
	private String ano;
	
	@Id
	@Column(length=32)
	private String akey;
	
	@ManyToOne 
	@JoinColumn(name = "qkey")	
	//@Column(length=32)
	//private String qkey;
	private TDQuestionVO question;
	
	@Column(length=32) 
	private String code;
	
	@Column(length=32)
	private String subcode;
	
	@Column(length=256)
	private String answer;
	
    @Builder
    public TDAnswerVO(String ano, String akey, TDQuestionVO question, String code, String subcode, String answer) {
        this.ano = ano;
        this.answer = answer;
        this.code = code;
        this.subcode = subcode;
        this.question = question;
        this.akey = akey;
    }
    
    
    
}
