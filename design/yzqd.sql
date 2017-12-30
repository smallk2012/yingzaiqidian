/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2017/12/30 ÐÇÆÚÁù 16:42:07                      */
/*==============================================================*/


drop table if exists yzqd_editlogs;

drop table if exists yzqd_loginlogs;

drop table if exists yzqd_reslabels;

drop table if exists yzqd_resource;

drop table if exists yzqd_users;

/*==============================================================*/
/* Table: yzqd_editlogs                                         */
/*==============================================================*/
create table yzqd_editlogs
(
   eid                  bigint not null auto_increment,
   uid                  varchar(20),
   cont                 text,
   tfield               varchar(20),
   tname                varchar(20),
   eTime                datetime,
   primary key (eid)
)
auto_increment = 40000;

/*==============================================================*/
/* Table: yzqd_loginlogs                                        */
/*==============================================================*/
create table yzqd_loginlogs
(
   lid                  bigint not null auto_increment,
   uid                  bigint,
   ltoken               varchar(25),
   ltime                datetime,
   lip                  varchar(20),
   primary key (lid)
)
auto_increment = 50000;

/*==============================================================*/
/* Table: yzqd_reslabels                                        */
/*==============================================================*/
create table yzqd_reslabels
(
   lid                  bigint not null auto_increment,
   lname                varchar(20),
   type                 int,
   cTime                datetime,
   eTime                datetime,
   isDel                int default 0,
   primary key (lid)
)
auto_increment = 30000;

/*==============================================================*/
/* Table: yzqd_resource                                         */
/*==============================================================*/
create table yzqd_resource
(
   rid                  bigint not null auto_increment,
   lid                  bigint,
   tid                  bigint,
   uid                  bigint,
   title                varchar(255),
   cont                 text,
   cTime                datetime,
   eTime                datetime,
   isDel                int default 0,
   primary key (rid)
)
auto_increment = 20000;

/*==============================================================*/
/* Table: yzqd_users                                            */
/*==============================================================*/
create table yzqd_users
(
   uid                  bigint not null auto_increment,
   acc                  varchar(20),
   psw                  varchar(20),
   hpic                 varchar(255),
   nickname             varchar(20),
   email                varchar(20),
   phone                varchar(20),
   cTime                datetime,
   isDel                int default 0,
   primary key (uid)
)
auto_increment = 10000;

