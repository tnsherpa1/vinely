package com.example.winesapi.beans;

import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "WINES")

public class Wine {
    public Wine(String title, String region, String kind, int price, String description, int qty) {
        this.title = title;
        this.region = region;
        this.kind = kind;
        this.price = price;
        this.description = description;
        this.qty = qty;
    }
    @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "REGION")
    private String region;

    @Column(name = "KIND")
    private String kind;

    @Column(name = "PRICE")
    private float price;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "QTY")
    private int qty;
}
