package kr.or.tta.jungwon.vo;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

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
@Table(name="tb_rt_score")
public class ResultScoreVO {


	@Id 
	@Column
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int seq;	
	
	@Column(length=32)
	private String name;
		
	@Column(length=32)
	private String id ;
	
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss" , timezone="Asia/Seoul")
	private Date datetime ;	

	@Column
	private double mt;
	
	@Column
	private double rt;	
	
	@Column
	private double c_ttad;
	
	@Column
	private double c_swd;
	
	@Column
	private double c_isd;
	
	@Column
	private double c_ctd;
	
	@Column
	private double c_td;
	
	@Column
	private double s_ttad;
	
	@Column
	private double s_swd;
	
	@Column
	private double s_isd;
	
	@Column
	private double s_ctd;
	
	@Column
	private double s_td;

	@Column
	private double f_ttad;
	
	@Column
	private double f_swd;
	
	@Column
	private double f_isd;
	
	@Column
	private double f_ctd;
	
	@Column
	private double f_td;

    @Builder
    public ResultScoreVO(String name, String id, double mt, double rt,
    		double c_ttad, double c_swd, double c_isd, double c_ctd, double c_td,
    		double s_ttad, double s_swd, double s_isd, double s_ctd, double s_td,
    		double f_ttad, double f_swd, double f_isd, double f_ctd, double f_td){
        this.name = name;
        this.id = id;
        this.mt = mt;
        this.rt = rt;
        this.c_ttad = c_ttad;
        this.c_swd = c_swd;
        this.c_isd = c_isd;
        this.c_ctd = c_ctd;
        this.c_td = c_td;

        this.f_ttad = f_ttad;
        this.f_swd = f_swd;
        this.f_isd = f_isd;
        this.f_ctd = f_ctd;
        this.f_td = f_td;
        
        this.s_ttad = s_ttad;
        this.s_swd = s_swd;
        this.s_isd = s_isd;
        this.s_ctd = s_ctd;
        this.s_td = s_td;
    }
}
