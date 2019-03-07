package kr.or.tta.jungwon.vo;

public class Machine {
	public String svrname;
	public int type;
	public String model;
	public String cpu_type;
	public String cpu;
	public int cpu_p;
	public int cpu_c;
	public int cpu_t;
	public int mem;
	public String remark;
	public boolean isEnable;
	public String getSvrname() {
		return svrname;
	}
	public void setSvrname(String svrname) {
		this.svrname = svrname;
	}
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getCpu_type() {
		return cpu_type;
	}
	public void setCpu_type(String cpu_type) {
		this.cpu_type = cpu_type;
	}
	public String getCpu() {
		return cpu;
	}
	public void setCpu(String cpu) {
		this.cpu = cpu;
	}
	public int getCpu_p() {
		return cpu_p;
	}
	public void setCpu_p(int cpu_p) {
		this.cpu_p = cpu_p;
	}
	public int getCpu_c() {
		return cpu_c;
	}
	public void setCpu_c(int cpu_c) {
		this.cpu_c = cpu_c;
	}
	public int getCpu_t() {
		return cpu_t;
	}
	public void setCpu_t(int cpu_t) {
		this.cpu_t = cpu_t;
	}
	public int getMem() {
		return mem;
	}
	public void setMem(int mem) {
		this.mem = mem;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public boolean isEnable() {
		return isEnable;
	}
	public void setEnable(boolean isEnable) {
		this.isEnable = isEnable;
	}
	
}
