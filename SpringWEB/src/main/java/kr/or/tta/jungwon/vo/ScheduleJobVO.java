package kr.or.tta.jungwon.vo;

import java.util.Date;
import java.util.LinkedList;
import java.util.List;

import lombok.Builder;
import lombok.Data;

public @ Data class ScheduleJobVO {
	
	private String threadName;
	private Date fromDate;
	private Date endDate;
	private String instName;
	private String keyword;
	private String searchType;
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
