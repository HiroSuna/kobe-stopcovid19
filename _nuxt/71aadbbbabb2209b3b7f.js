(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{478:function(t,e,r){"use strict";r.r(e);var o=r(354),n=r(397),c=r(400),d=r(398),m=r(402),h=r(401),l=r(403),f=r(405),$={components:{ConfirmedCasesDetailsCard:n.a,ConfirmedCasesNumberCard:c.a,ConfirmedCasesAttributesCard:d.a,TestedNumberCard:m.a,TelephoneAdvisoryReportsNumberCard:h.a,ConsultationDeskReportsNumberCard:l.a,HealthCenterDeskReportsNumberCard:f.a},data:function(){var title,t;switch(this.$route.params.card){case"details-of-confirmed-cases":title=this.$t("検査陽性者の状況"),t=o.inspections_summary.date;break;case"number-of-confirmed-cases":title=this.$t("陽性患者数"),t=o.patients.date;break;case"attributes-of-confirmed-cases":title=this.$t("陽性患者の属性"),t=o.patients.date;break;case"number-of-tested":title=this.$t("検査実施件数"),t=o.inspections_summary.date;break;case"number-of-reports-to-covid19-telephone-advisory-center":title=this.$t("新型コロナ健康相談窓口 相談件数"),t=o.window_contacts.date;break;case"number-of-reports-to-covid19-consultation-desk":title=this.$t("帰国者・接触者相談センター 相談件数"),t=o.center_contacts.date;break;case"number-of-reports-to-health-center-desk":title=this.$t("保健所・保健センターでの一般相談件数"),t=o.health_center_summary.date}var data={title:title,updatedAt:t};return data},head:function(){var t="https://stopcovid19.metro.tokyo.lg.jp",e=(new Date).getTime(),r="ja"===this.$i18n.locale?"".concat(t,"/ogp/").concat(this.$route.params.card,".png?t=").concat(e):"".concat(t,"/ogp/").concat(this.$i18n.locale,"/").concat(this.$route.params.card,".png?t=").concat(e),o="".concat(this.updatedAt," | ").concat(this.$t("当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、神戸市が開設したものです。"));return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:t+this.$route.path+"/"},{hid:"og:title",property:"og:title",content:this.title+" | "+this.$t("神戸市")+" "+this.$t("新型コロナウイルス感染症")+this.$t("対策サイト")},{hid:"description",name:"description",content:o},{hid:"og:description",property:"og:description",content:o},{hid:"og:image",property:"og:image",content:r},{hid:"twitter:image",name:"twitter:image",content:r}]}}},k=r(5),component=Object(k.a)($,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",["details-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-details-card"):"number-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-number-card"):"attributes-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-attributes-card"):"number-of-tested"==this.$route.params.card?e("tested-number-card"):"number-of-reports-to-covid19-telephone-advisory-center"==this.$route.params.card?e("telephone-advisory-reports-number-card"):"number-of-reports-to-covid19-consultation-desk"==this.$route.params.card?e("consultation-desk-reports-number-card"):"number-of-reports-to-health-center-desk"==this.$route.params.card?e("health-center-desk-reports-number-card"):this._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);