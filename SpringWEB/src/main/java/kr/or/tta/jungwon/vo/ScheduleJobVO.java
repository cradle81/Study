package kr.or.tta.jungwon.vo;

import java.util.Date;
import java.util.LinkedList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString
@Getter
@Setter
@Entity
@Table(name="tb_schedulejob")
public class ScheduleJobVO {
	
	@Id
	@Column(length=64)
	private String threadName;
	
	private Date fromDate;
	private Date endDate;
	@Column(length=128)
	private String instName;
	@Column(length=128)
	private String keyword;
	@Column(length=10)
	private String searchType;
	
	@Column(length=256)
	private String users;
	
    @Builder
    public ScheduleJobVO(String threadName, MonInfo mon) {
        this.threadName = threadName;
        this.endDate = mon.getEndDate();
        this.fromDate = mon.getFromDate();
        this.instName= mon.getInstName();
        this.keyword=mon.getKeyword();
        this.searchType=mon.getSearchType();
        this.users=mon.getUsers().toString();
    }
}
