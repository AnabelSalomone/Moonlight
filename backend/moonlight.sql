/* Table: MOOD                                      */
/*==============================================================*/
create table MOOD (
   ID                	SERIAL,
   NOTE               	INTEGER              null,
   CREATION_DATE        DATE                 null,
   ID_STATUS            INTEGER	             null,
   ID_EMOTION           INTEGER              null,  
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
/* Table: STATUS                                           */
/*==============================================================*/
create table STATUS (
   ID_STATUS            SERIAL,
   LABEL                VARCHAR(5)          null,
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
   LABEL                VARCHAR(50)                 null,
   constraint PK_EMOTION primary key (ID_EMOTION)
);
/*==============================================================*/
/* Index: EMOTION_PK                                  */
/*==============================================================*/
create unique index EMOTION_PK on EMOTION (
ID_EMOTION
);

alter table MOOD
   add constraint FK_MOOD_STATUS foreign key (ID_STATUS)
      references STATUS (ID_STATUS)
      on delete restrict on update restrict;
alter table MOOD
   add constraint FK_MOOD_EMOTION foreign key (ID_EMOTION)
      references EMOTION (ID_EMOTION)
      on delete restrict on update restrict;