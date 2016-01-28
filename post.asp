<%
    dim fname,city
    fname=request.form("name")
    city=request.form("city")
    response.write("亲爱的 " & fname & "！")
    response.write("希望你住在" & city & "一切顺利！")
%>