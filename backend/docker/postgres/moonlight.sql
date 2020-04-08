/* Table: MOOD                                      */
/*==============================================================*/
create table MOOD (
   ID                	SERIAL,
   NOTE               	INTEGER              null,
   CREATION_DATE        TIMESTAMP            not null,
   ID_STATUS            INTEGER	             null,
   ID_EMOTION           INTEGER              not null,
   ID_USER              INTEGER              not null,
   constraint PK_MOOD primary key (ID)
);
/*==============================================================*/
/* Index: MOOD_PK                                    */
/*==============================================================*/
create unique index MOOD_PK on MOOD (
ID
);
/*==============================================================*/
/* Index: RELATIONSHIP_1_FK                                    */
/*==============================================================*/
create  index RELATIONSHIP_1_FK on MOOD (
ID_STATUS
);
/*==============================================================*/
/* Index: RELATIONSHIP_2_FK                                    */
/*==============================================================*/
create  index RELATIONSHIP_2_FK on MOOD (
ID_EMOTION
);
/*==============================================================*/
/* Index: RELATIONSHIP_3_FK                                    */
/*==============================================================*/
create  index RELATIONSHIP_3_FK on MOOD (
ID_USER
);
/*==============================================================*/
/* Table: STATUS                                           */
/*==============================================================*/
create table STATUS (
   ID_STATUS            SERIAL,
   LABEL                VARCHAR(5)          not null,
   constraint PK_STATUS primary key (ID_STATUS)
);
/*==============================================================*/
/* Index: STATUS_PK                                        */
/*==============================================================*/
create unique index STATUS_PK on STATUS (
ID_STATUS
);
/*==============================================================*/
/* Table: EMOTION                                     */
/*==============================================================*/
create table EMOTION (
   ID_EMOTION    		SERIAL,
   LABEL                VARCHAR(50)                 not null,
   constraint PK_EMOTION primary key (ID_EMOTION)
);
/*==============================================================*/
/* Index: EMOTION_PK                                  */
/*==============================================================*/
create unique index EMOTION_PK on EMOTION (
ID_EMOTION
);

/*==============================================================*/
/* Table: MOOD_USER                                     */
/*==============================================================*/
create table MOOD_USER (
   ID_USER      		SERIAL,
   FIRST_NAME           VARCHAR(200)                 not null,
   LAST_NAME            VARCHAR(200)                 not null,
   MAIL                 TEXT		                 not null,
   constraint PK_USER primary key (ID_USER)
);
/*==============================================================*/
/* Index: USER_PK                                  */
/*==============================================================*/
create unique index USER_PK on MOOD_USER (
ID_USER
);

alter table MOOD
   add constraint FK_MOOD_STATUS foreign key (ID_STATUS)
      references STATUS (ID_STATUS)
      on delete restrict on update restrict;
alter table MOOD
   add constraint FK_MOOD_EMOTION foreign key (ID_EMOTION)
      references EMOTION (ID_EMOTION)
      on delete restrict on update restrict;
alter table MOOD
   add constraint FK_MOOD_USER foreign key (ID_USER)
      references MOOD_USER (ID_USER)
      on delete restrict on update restrict;
	  
/*==============================================================*/
/* INSERT DATA                               */
/*==============================================================*/
INSERT INTO EMOTION(label) VALUES ('sad');
INSERT INTO EMOTION(label) VALUES ('tired');
INSERT INTO EMOTION(label) VALUES ('angry');
INSERT INTO EMOTION(label) VALUES ('anguished');
INSERT INTO EMOTION(label) VALUES ('irritated');
INSERT INTO EMOTION(label) VALUES ('stressed');
INSERT INTO EMOTION(label) VALUES ('happy');
INSERT INTO EMOTION(label) VALUES ('calm');
INSERT INTO EMOTION(label) VALUES ('confident');
INSERT INTO EMOTION(label) VALUES ('energetic');
INSERT INTO EMOTION(label) VALUES ('excited');

INSERT INTO STATUS(label) VALUES (':,(');
INSERT INTO STATUS(label) VALUES ('v_v');
INSERT INTO STATUS(label) VALUES (':/');
INSERT INTO STATUS(label) VALUES (':|');
INSERT INTO STATUS(label) VALUES (':)');
INSERT INTO STATUS(label) VALUES (':D');
INSERT INTO STATUS(label) VALUES ('XD');

/*TODO: REMOVE THIS AFTER DEVELOPMENT DONE*/

INSERT INTO MOOD_USER(first_name,last_name,mail) VALUES ('John','Doe','john.doe@test.test');
INSERT INTO MOOD_USER(first_name,last_name,mail) VALUES ('Isabel','Perez','isa.perez@test.test');

INSERT INTO MOOD(note,creation_date,id_emotion,id_user) VALUES (1,'2020-04-07 11:47:33.801053',1,1);
INSERT INTO MOOD(note,creation_date,id_emotion,id_user) VALUES (5,'2020-04-07 17:47:33.801053',8,1);
INSERT INTO MOOD(id_status,creation_date,id_emotion,id_user) VALUES (3,'2020-04-08 09:47:33.801053',4,1);
INSERT INTO MOOD(note,creation_date,id_emotion,id_user) VALUES (8,'2020-04-09 15:47:33.801053',9,1);
INSERT INTO MOOD(note,creation_date,id_emotion,id_user) VALUES (9,'2020-04-10 12:47:33.801053',11,1);
INSERT INTO MOOD(note,creation_date,id_emotion,id_user) VALUES (1,'2020-04-07 17:47:33.801053',2,2);