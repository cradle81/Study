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
@Table(name="tb_position_weight")
public class PositionWeightVO {


	@Id
	private int seq;
	
	
	@Column(length=64)
	private String code;
		
	@Column(length=64)
	private String position ;
	
	@Column 
	private double ttad;
	
	@Column  
	private double swd;
	
	@Column
	private double isd;
	
	@Column
	private double ctd;
	
	@Column
	private double td;	
	
    @Builder
    public PositionWeightVO(String code, String position, double ttad, double swd, double isd, double ctd, double td) {
        this.code = code;
        this.position = position;
        this.ttad = ttad;
        this.swd = swd;
        this.isd = isd;
        this.td = td;
    }
}
