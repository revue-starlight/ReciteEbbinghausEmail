let myReq = new Request('http://i.nuist.edu.cn/qljfwapp/sys/lwNuistHealthInfoDailyClock/modules/healthClock/T_HEALTH_DAILY_INFO_SAVE.do',
{headers:{
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'accept-language': 'en-US,en;q=0.9',
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'x-requested-with': 'XMLHttpRequest',
    'cookie': 'route=aaab9672a06847a80f9d213fc829a610; EMAP_LANG=zh; _WEU=qHCWLHh5epD5ampB1nfuURs0eAn2Y*cu7DXYi2ZgQVmYX8oPRn4uIHpOievm1fgMH0ojiUcC23LbPMGFB4r9OT46anRSq_nfc*k5cWwVuzwEXd4Gm1E_qJzz4mEBaMP83IPSxlEVKq0iB9b2E0*hlkxg4szgbze4qEJn5nBYW6w85jvhqjCskHSPXsCYgXGl; iPlanetDirectoryPro=AWvrHyoju5jjIFCmbXAZb6CVc9SMVTDI; MOD_AUTH_CAS=MOD_AUTH_ST-93995-1hu0oqT5VgIoXqWPQ-iNcZ9-Od0authserver2; JSESSIONID=N7yaSX0f-cQL8VJMccsJobil5zm4PzuPp2ayAm9rzYPs8YjpapGd!377215706; route=4fc3283ca1cce94e1667bef135881bb3; gwroute=883080adc7f3f32edee964e5d48f498c',
    'Referer': 'http://i.nuist.edu.cn/qljfwapp/sys/lwNuistHealthInfoDailyClock/index.do',
    'Referrer-Policy': 'strict-origin-when-cross-origin'
},body:"WID=DA66BC1FC3674861E053EFEBC3CA7FA3&CREATED_AT=2022-03-18+07%3A58%3A45&CZR=201983290266&CZZXM=%E9%99%88%E6%B3%B3%E7%90%A6&CZRQ=2022-03-18+07%3A58%3A05&BY13=&BY14=&BY15=&BY16=&BY17=&BY18=&BY19=&BY20=&USER_ID=201983290266&USER_NAME=%E9%99%88%E6%B3%B3%E7%90%A6&DEPT_CODE_DISPLAY=%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%AD%A6%E9%99%A2&DEPT_CODE=120090000&DEPT_NAME=%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%AD%A6%E9%99%A2%E3%80%81%E8%BD%AF%E4%BB%B6%E5%AD%A6%E9%99%A2%E3%80%81%E7%BD%91%E7%BB%9C%E7%A9%BA%E9%97%B4%E5%AE%89%E5%85%A8%E5%AD%A6%E9%99%A2%EF%BC%88%E6%95%B0%E5%AD%97%E5%8F%96%E8%AF%81%E6%95%99%E8%82%B2%E9%83%A8%E5%B7%A5%E7%A8%8B%E7%A0%94%E7%A9%B6%E4%B8%AD%E5%BF%83%E3%80%81%E5%85%AC%E5%85%B1%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%95%99%E5%AD%A6%E9%83%A8%EF%BC%89&PHONE_NUMBER=13347975939&FILL_TIME=2022-03-18+07%3A58%3A38&CLOCK_SITUATION=%E6%B1%9F%E8%8B%8F%E7%9C%81%E5%8D%97%E4%BA%AC%E5%B8%82&BY2_DISPLAY=%E6%B1%9F%E8%8B%8F%E7%9C%81&BY2=320000&BY3_DISPLAY=%E6%B7%AE%E5%AE%89%E5%B8%82&BY3=320800&BY4_DISPLAY=%E6%B8%85%E6%B1%9F%E6%B5%A6%E5%8C%BA&BY4=320812&BY5=%E6%B7%AE%E6%B5%B7%E5%8D%97%E8%B7%AF30-56&BY6=%E9%99%88%E6%B3%B3%E7%90%A6&BY7=17372787176&TODAY_SITUATION_DISPLAY=%E5%A2%83%E5%86%85%E5%85%B6%E4%BB%96&TODAY_SITUATION=004&BY8_DISPLAY=%E6%B1%9F%E8%8B%8F%E7%9C%81&BY8=320000&BY10_DISPLAY=%E5%8D%97%E4%BA%AC%E5%B8%82&BY10=320100&BY11_DISPLAY=%E6%B5%A6%E5%8F%A3%E5%8C%BA&BY11=320111&BY12=%E5%8D%97%E4%BA%AC%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6&TODAY_CONDITION_DISPLAY=%E6%A0%A1%E5%86%85%E5%AD%A6%E4%B9%A0&TODAY_CONDITION=004&TODAY_NAT_CONDITION_DISPLAY=%E4%BB%8A%E6%97%A5%E6%97%A0%E6%A3%80%E6%B5%8B%E9%9C%80%E8%A6%81&TODAY_NAT_CONDITION=001&BY9=&TODAY_VACCINE_CONDITION_DISPLAY=&TODAY_VACCINE_CONDITION=&TODAY_BODY_CONDITION_DISPLAY=%E6%AD%A3%E5%B8%B8&TODAY_BODY_CONDITION=001&TODAY_HEALTH_CODE_DISPLAY=%E7%BB%BF%E7%A0%81&TODAY_HEALTH_CODE=001&CONTACT_HISTORY_DISPLAY=%E6%97%A0&CONTACT_HISTORY=001&TODAY_ISOLATE_CONDITION_DISPLAY=%E6%9C%AA%E9%9A%94%E7%A6%BB&TODAY_ISOLATE_CONDITION=001&TODAY_TARRY_CONDITION_DISPLAY=%E6%9C%AA%E6%BB%9E%E7%95%99&TODAY_TARRY_CONDITION=001&NEED_CHECKIN_DATE=2022-03-18&CHECKED_DISPLAY=%E6%98%AF&CHECKED=YES&BY1=&TODAY_TEMPERATURE=35.6",
method:"POST"}
);

fetch(myReq).then(val => console.log(val));