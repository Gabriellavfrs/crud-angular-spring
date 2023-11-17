package com.rent;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@SpringBootTest
@AutoConfigureMockMvc
public class ReservationControllerTests {

    @Autowired
    MockMvc mockMvc;

    @Test
    void findAllReservations() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/reservations"))
                .andExpect(MockMvcResultMatchers.status().isOk()).andReturn();
    }

    @Test
    void removesAReservation() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.delete("/api/reservations?id=1")).andExpect(MockMvcResultMatchers.status().isOk());
    }
}
