package kr.or.tta.bidinfo.mail;

import java.util.HashMap;

import org.springframework.stereotype.Component;

@Component
public interface MailMonManagerInterface {
	public void add(String threadName,MailMonitorThread t);
	public void delete(String threadName);
	public HashMap getList();
}
