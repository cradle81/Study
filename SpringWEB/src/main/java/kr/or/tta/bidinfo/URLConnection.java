package kr.or.tta.bidinfo;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.charset.Charset;
import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.Comparator;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.DefaultHttpClient;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class URLConnection {
	
	//본공고
	private final String tbidListURL = "http://www.g2b.go.kr:8101/ep/tbid/tbidList.do";
	
	//사전공고
	private final String preStdPublishListURL = "http://www.g2b.go.kr:8081/ep/preparation/prestd/preStdPublishList.do";
	
	private final String USER_AGENT = "Mozilla/5.0";
	private static final Logger logger = LoggerFactory.getLogger(URLConnection.class);
	
	public URLConnection()
	{
	
	}
	
	public StringBuffer excuteURL(URI uri)
	{
		StringBuffer result = new StringBuffer();		
		
		//클라이언트 생성.		
		HttpClient httpClient = new DefaultHttpClient();		
		HttpGet httpGet = new HttpGet();

		// add request header
		httpGet.addHeader("User-Agent", USER_AGENT);
		
				
		//set URL
		httpGet.setURI(uri);
		
		//excute URL		
		try {
			
			HttpResponse response=null;
			response = httpClient.execute(httpGet);
			logger.debug("Sending 'GET' request to URL : " + uri);
			logger.debug("Response Code : " + 
	                       response.getStatusLine().getStatusCode());
			
			BufferedReader rd;
			HttpEntity entity = response.getEntity();
			rd = new BufferedReader(
		               new InputStreamReader(entity.getContent(),"EUC-KR"));
			  // response가 EUC-KR으로 오기 때문에 읽어들일때 EUC-KR으로 읽어들여야 함.
			result = new StringBuffer();
			String line = "";
			while ((line = rd.readLine()) != null) {
				result.append(line);
			}
			logger.debug("============================");
			logger.debug(result.toString());
			logger.debug("============================");

		} catch (ClientProtocolException e1) {		
			e1.printStackTrace();
		} catch (IOException e1) {		
			e1.printStackTrace();
		}		
                     
		return result;
	}
	
	public  JSONObject getPreStdPublishList(String from, String to, String instNm, String bidNm, String isExctMatch)
	{
		//URL Setting 
		
			URIBuilder builder=new URIBuilder();
			StringBuffer result = new StringBuffer();
			try {
				builder = new URIBuilder(preStdPublishListURL);
				
				//URI 인코딩을 UTF-8이 아닌 ECU-KR으로 셋팅해아 한다. 사이트에서 UTF-8이 아닌 EUC-KR으로 지원하기 때ㅁㄴ
				builder.setCharset(Charset.forName("EUC-KR"));
				
				//파라미터 셋팅
		        builder.setParameter("taskClCd", "1");
		        builder.setParameter("orderbyItem", "1");
		        builder.setParameter("supplierLoginYn", "N");
		        builder.setParameter("instCl", "2");
		        builder.setParameter("instNm",instNm);
		        
		        //builder.setParameter("dminstCd", "1");
		        builder.setParameter("prodNm", bidNm);
		        builder.setParameter("swbizTgYn", "");
		        builder.setParameter("searchDetailPrdnmNo", "");
		        builder.setParameter("searchDetailPrdnm", "");
				builder.setParameter("fromRcptDt",from);
				builder.setParameter("toRcptDt",to);
				builder.setParameter("recordCountPerPage","500");
				
				URI uri=builder.build();
				
				
				logger.debug("URL Builder String =>> {}.", uri);
							
				result = excuteURL(uri);
			} catch (URISyntaxException e) { 
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

			//파싱			
			Document doc = Jsoup.parse(result.toString());
			Elements rows = doc.select("div.results tr");
			
			System.out.println(rows.size());
						
			String[] items = new String[] { "등록번호", "공고명", "수요기관", "사전규격공개일시"};
			JSONObject resObj = new JSONObject();
			JSONArray jsonArrayRows = new JSONArray();
			
		    for (Element row : rows) {		    
		    	if (rows.size()==1)
		    	{		    		
		    		break;
		    		
		    	}		    	
		    	
		    	//데이타		    	
		    	if (row.getElementsByTag("td").hasText())
		    	{
			    	//검색데이터가 없으면 그냥 break		    
			    	if (row.getElementsByTag("td").get(0).text().equals("검색된 데이터가 없습니다."))
			    		break;			    		
			    	String item2 = row.getElementsByTag("td").get(1).text();	 // URL을 위한 번호	    	
			    	String item4 = row.getElementsByTag("td").get(3).text();	 // 공고명	    	
			    	String item5 = row.getElementsByTag("td").get(4).text();	// 발주처	    	
			    	String item6 = row.getElementsByTag("td").get(5).text();     // 시간
			    	
			    	
			    	//json형태
			    	JSONObject item = new JSONObject();
			    	item.put("time", item6); //시간
			    	item.put("name", item4); //공고
			    	item.put("instNm", item5); //발주처
			    	
			    	//링크가 없고 그냥 등록 번호를 알아넣어서 강제로 호출해야 함 따라서 등록번호 추출		    	
			    	logger.debug(item6 + item4+ item5); 
			    	
			    	//링크 넣기
			    	//링크에 등록 번호를 조합해서 넣오 둔다
			    	item.put("link", "https://www.2b.go.kr:8143/ep/preparation/prestd/preStdDtl.do?preStdRegNo="+item2);
			    	if(isExctMatch.equals("true"))
			    	{
			    		if(item5.equals(instNm))
			    		{
			    			jsonArrayRows.add(item);
			    		}
			    	}
			    	else
			    	{
			    		jsonArrayRows.add(item);
			    	}
			    	
		    			    	
			    	}		    	
			    	resObj.put("data",jsonArrayRows);	
	          }
		return resObj;
		
	}
	
/*	public JSONObject getTbidListURL(String from, String to, String instNm, String bidNm)
	{
		URIBuilder builder=new URIBuilder();	
		
		
		//조회 기간 확인 // 6개월 이상인 경우는 별도로 셋팅해야 함
		
		
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd");
		LocalDate  startDate= LocalDate.parse(from,formatter);
		LocalDate  endDate= LocalDate.parse(to,formatter);
			
			
		//6개월 이상인지 확인
		logger.info("startDate = {}",startDate);
		logger.info("endDate = {}",endDate);
		long months = ChronoUnit.MONTHS.between(startDate, endDate);
		long days = ChronoUnit.DAYS.between(startDate, endDate);
		logger.info("month = {}",months);
		logger.info("days = {}",days);
		
		if (days > 180)
		{
			 LocalDate tempDate = startDate;
			 for(int i=0;i<(months/6);i++)
			 {
				 logger.info("{} ~ {}",tempDate,tempDate.plusMonths(6));		
				 tempDate=startDate.plusMonths(6);
				 
			 }
			 logger.info("{} ~ {}",tempDate,endDate);
			 
		}
		
		
		StringBuffer result=new StringBuffer();
		try {
			builder = new URIBuilder(tbidListURL);
			
			//파라미터 셋팅
			builder.setParameter("searchType", "1");
			builder.setParameter("bidSearchType","1");
			builder.setParameter("bidNm",bidNm);
			
			 
			//기관 셋팅
			builder.setParameter("radOrgan","2");
			//builder.setParameter("instNm","국립전파연구원");
			builder.setParameter("instNm",instNm);
			
			//기타
			builder.setCharset(Charset.forName("EUC-KR"));
			builder.setParameter("searchDtType", "1");
			//builder.setParameter("fromBidDt","2017/9/1");
			//builder.setParameter("toBidDt","2017/9/7");
			builder.setParameter("fromBidDt",from);
			builder.setParameter("toBidDt",to);
			
			builder.setParameter("budgetCompare","UP");
			builder.setParameter("regYn","Y");
			//builder.setParameter("currentPageNo",currentPageNo);
			builder.setParameter("recordCountPerPage","500");
			
			URI uri=builder.build();		
			
			logger.debug("URL Builder String =>> {}.", uri);					
			result = excuteURL(uri);		
		
		} catch (URISyntaxException e) { 
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		// HTML 파싱
		Document doc = Jsoup.parse(result.toString());
		Elements rows = doc.select("div.results tr");
		
		logger.debug("rows.size ====> {}",rows.size());
					
		
		
		JSONObject resObj = new JSONObject();
		JSONArray jsonArrayRows = new JSONArray();
		
	    for (Element row : rows) {	    	
	    	//제목	    	
	    	if (row.getElementsByTag("th").hasText())
	    	{
		    	//String item1 = row.getElementsByTag("th").get(1).text();		    	
		    	String item3 = row.getElementsByTag("th").get(3).text();		    	
		    	String item5 = row.getElementsByTag("th").get(5).text();		    	
		    	String item7 = row.getElementsByTag("th").get(7).text();
		    	
		    	//System.out.printf("%-10s%-50s%-100s\n", item5,item7,item3);
	    	}
	    	
	    	//만약 내용이 없으면 break;
	    	
	    	if (rows.size()==1)
	    	{		    		
	    		break; 
	    		
	    	}	    		    
            //내용
	    	if (row.getElementsByTag("td").hasText())
	    	{
	    		if (row.getElementsByTag("td").get(0).text().equals("검색된 데이터가 없습니다."))
	    		break;	    
		    	String item3 = row.getElementsByTag("td").get(3).text();		    	
		    	String item5 = row.getElementsByTag("td").get(5).text();		    	
		    	String item7 = row.getElementsByTag("td").get(7).text();

		    	
		    	//json형태
		    	JSONObject item = new JSONObject();
		    	item.put("time", item7); //시간
		    	item.put("name", item3); //공고
		    	item.put("instNm", item5); //발주처
		    	
		    	
		    	//System.out.printf("%-20s%-10s%-50s%-100s\n", item1,item5,item7,item3);
		    	//System.out.printf("%-50s%-100s%-20s\n", item7,item3,item5);
		    	
		    	//link row에 에드			    			    	
		    	item.put("link",row.select("a").attr("href"));
		    	
		    	//link 프린트
		    	//System.out.println(row.select("a").attr("href"));
		    	
		    	//json 형태		    	
		    	jsonArrayRows.add(item);	    	
	    	}  	
	    	resObj.put("data",jsonArrayRows);	    	    	
          }				
	    return resObj;
	}*/
	public JSONObject getTbidListURL(String from, String to, String instNm, String bidNm,String isExtMatch)
	{
		URIBuilder builder=new URIBuilder();	
		
		
		//조회 기간 확인 // 6개월 이상인 경우는 별도로 셋팅해야 함
		
		
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd");
		LocalDate  startDate= LocalDate.parse(from,formatter);
		LocalDate  endDate= LocalDate.parse(to,formatter);
			
			
		//6개월 이상인지 확인
		logger.info("startDate = {}",startDate);
		logger.info("endDate = {}",endDate);
		long months = ChronoUnit.MONTHS.between(startDate, endDate);
		long days = ChronoUnit.DAYS.between(startDate, endDate);
		logger.info("month = {}",months);
		logger.info("days = {}",days);
		
		JSONObject resObj = new JSONObject();
		JSONArray jsonArrayRows = new JSONArray();
		if (days > 180)
		{
			 LocalDate tempDate = startDate;
			 for(int i=0;i<(months/6);i++)
			 {
				 logger.info("{} ~ {}",tempDate,tempDate.plusMonths(6));
				 jsonArrayRows.addAll(getTbidListURL2(tempDate.format(formatter),(tempDate.plusMonths(6)).format(formatter),instNm,bidNm,isExtMatch));				 		
				 tempDate=tempDate.plusMonths(6);				 				
			 }
			 logger.info("{} ~ {}",tempDate,endDate);
			 jsonArrayRows.addAll(getTbidListURL2(tempDate.format(formatter),endDate.format(formatter),instNm,bidNm,isExtMatch));
			 
		}else
		{
			jsonArrayRows = getTbidListURL2(startDate.format(formatter),endDate.format(formatter),instNm,bidNm,isExtMatch);
		}
		jsonArrayRows.sort(new Comparator<JSONObject>() {
	         public int compare(JSONObject a, JSONObject b) {
		            String str1 = new String();
		            String str2 = new String();
		            str1 = (String)a.get("time");
		            str2 = (String)b.get("time");
		            return str1.compareTo(str2);
		         }
		});
    	resObj.put("data",jsonArrayRows);	    	    				
	    return resObj;
	}
	
	public JSONArray getTbidListURL2(String from, String to, String instNm, String bidNm,String isExtMatch)
	{
		URIBuilder builder=new URIBuilder();
		StringBuffer result=new StringBuffer();
		try {
			builder = new URIBuilder(tbidListURL);
			
			//파라미터 셋팅
			builder.setParameter("searchType", "1");
			builder.setParameter("bidSearchType","1");
			builder.setParameter("bidNm",bidNm);
			
			 
			//기관 셋팅
			builder.setParameter("radOrgan","2");
			builder.setParameter("instNm",instNm);
			
			//기타
			builder.setCharset(Charset.forName("EUC-KR"));
			builder.setParameter("searchDtType", "1");
			builder.setParameter("fromBidDt",from);
			builder.setParameter("toBidDt",to);
			
			builder.setParameter("budgetCompare","UP");
			builder.setParameter("regYn","Y");
			builder.setParameter("recordCountPerPage","500");
			
			URI uri=builder.build();		
			
			logger.debug("URL Builder String =>> {}.", uri);					
			result = excuteURL(uri);		
		
		} catch (URISyntaxException e) { 
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		// HTML 파싱
		Document doc = Jsoup.parse(result.toString());
		Elements rows = doc.select("div.results tr");
		
		logger.debug("rows.size ====> {}",rows.size());
					
		
		
		JSONObject resObj = new JSONObject();
		JSONArray jsonArrayRows = new JSONArray();
		
	    for (Element row : rows) {	    	
	    	//제목	    	
	    	if (row.getElementsByTag("th").hasText())
	    	{	    	
		    	String item3 = row.getElementsByTag("th").get(3).text();		    	
		    	String item5 = row.getElementsByTag("th").get(5).text();		    	
		    	String item7 = row.getElementsByTag("th").get(7).text();

	    	}
	    	
	    	//만약 내용이 없으면 break;
	    	
	    	if (rows.size()==1)
	    	{		    		
	    		break; 
	    		
	    	}	    		    
            //내용
	    	if (row.getElementsByTag("td").hasText())
	    	{
	    		if (row.getElementsByTag("td").get(0).text().equals("검색된 데이터가 없습니다."))
	    		break;	    
		    	String item3 = row.getElementsByTag("td").get(3).text();		    	
		    	String item5 = row.getElementsByTag("td").get(5).text();		    	
		    	String item7 = row.getElementsByTag("td").get(7).text();

		    	
		    	//json형태
		    	JSONObject item = new JSONObject();
		    	item.put("time", item7); //시간
		    	item.put("name", item3); //공고
		    	item.put("instNm", item5); //발주처    			    	
		    	item.put("link",row.select("a").attr("href"));   	
		    	jsonArrayRows.add(item);	    	
	    	}
	    }
	    return jsonArrayRows;
	    	
	}

	public static void main(String[] args)
	{
		URLConnection urlc = new URLConnection();
		urlc.getTbidListURL("2017/09/1","2017/09/01","국립전파연구원","","");
		urlc.getPreStdPublishList("2018/08/1","2018/08/09","대법원","","");
		
	}
}
