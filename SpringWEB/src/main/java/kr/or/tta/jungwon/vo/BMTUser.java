package kr.or.tta.jungwon.vo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString
@Getter
@Setter
@Entity
@Table(name="tb_bmtuser")
public  class BMTUser {
	
	@Column(length=32)
	public String email;
	
	@Column(length=32)
	public String name;
	
	@Id
	@Column(length=32)
	public String id;
	
	@Column(length=126)
	public String password;
	
	@Column(length=16)
	public String position;
	
	@Column(length=32)	
	public String role;
	
	@Column(length=64)
	public String detailfield;
	
	@Column(length=64)
	public String addtionaltask;
	
	@Column(length=126)
	public String remark;
	
	@Column(length=15)
	public String phone1;
	
	@Column(length=15)
	public String phone2;
	
	@Column(length=12)
	public String state; 
	
	
	
	@Builder
	public BMTUser(String email, String name)
	{
		this.email=email;
		this.name=name; 
	}		 
	
}
