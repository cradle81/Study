package kr.or.tta.jungwon.vo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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
@Table(name="tb_worktask_weight")
public class WorkTaskWeightVO {


	@Id 
	@Column
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int seq;	
	
	@Column(length=64)
	private String task;
		
	@Column(length=64)
	private String category ;
	
	@Column(length=32)
	private String code ;	
	
	@Column(length=32)
	private String type ;	
	
	@Column
	private double mt;
	
	@Column
	private double rt;	

	
    @Builder
    public WorkTaskWeightVO(String code, String task, String category, String type, double mt, double rt) {
        this.code = code;
        this.task = task;
        this.category = category;
        this.type = type;
        this.mt = mt;
        this.rt = rt;
    }
}
