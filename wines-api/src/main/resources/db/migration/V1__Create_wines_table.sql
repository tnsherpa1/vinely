create table WINES (
    ID serial,
    TITLE varchar(100) NOT NULL,
    REGION varchar(100),
    KIND varchar(100),
    PRICE float(2),
    DESCRIPTION text,
    QTY int
);