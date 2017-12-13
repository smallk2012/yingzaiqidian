/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2017/10/30 ÐÇÆÚÒ» 14:28:24                      */
/*==============================================================*/


drop table if exists editlogs;

drop table if exists labelgroup;

drop table if exists loginlogs;

drop table if exists resource;

drop table if exists typegroup;

drop table if exists users;

/*==============================================================*/
/* Table: editlogs                                              */
/*==============================================================*/
create table editlogs
(
   eid                  bigint not null,
   uid                  varchar(20),
   cont                 varchar(255),
   tfield               varchar(20),
   tname                varchar(20),
   eTime                datetime,
   primary key (eid)
)
auto_increment = 10000;

/*==============================================================*/
/* Table: labelgroup                                            */
/*==============================================================*/
create table labelgroup
(
   lid                  bigint not null,
   lname                varchar(20),
   cTime                datetime,
   eTime                datetime,
   isDel                int default 0,
   primary key (lid)
)
auto_increment = 10000;

/*==============================================================*/
/* Table: loginlogs                                             */
/*==============================================================*/
create table loginlogs
(
   lid                  bigint not null,
   uid                  bigint,
   ltoken               varchar(25),
   ltime                datetime,
   lip                  varchar(20),
   primary key (lid)
)
auto_increment = 10000;

/*==============================================================*/
/* Table: resource                                              */
/*==============================================================*/
create table resource
(
   rid                  bigint not null,
   lid                  bigint,
   tid                  bigint,
   uid                  bigint,
   title                varchar(20),
   cont                 varchar(0),
   cTime                datetime,
   eTime                datetime,
   isDel                int default 0,
   primary key (rid)
)
auto_increment = 10000;

/*==============================================================*/
/* Table: typegroup                                             */
/*==============================================================*/
create table typegroup
(
   tid                  bigint not null,
   tname                varchar(20),
   cTime                datetime,
   eTime                datetime,
   isDel                int default 0,
   primary key (tid)
)
auto_increment = 10000;

/*==============================================================*/
/* Table: users                                                 */
/*==============================================================*/
create table users
(
   uid                  bigint not null,
   acc                  varchar(20),
   psw                  varchar(20),
   hpic                 varbinary(255),
   nickname             varchar(20),
   email                varchar(20),
   phone                varchar(20),
   cTime                datetime,
   isDel                int default 0,
   primary key (uid)
)
auto_increment = 10000;

