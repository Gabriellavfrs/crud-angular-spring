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
public class VehiclesControllerTests {
    @Autowired
    MockMvc mockMvc;

    @Test
    void findAllVehicles() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/vehicles"))
                .andExpect(MockMvcResultMatchers.status().isOk()).andReturn();
    }

    @Test
    void findAvailableVehicles() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/vehicles?b=2024-02-01&e=2024-02-10"))
                .andExpect(MockMvcResultMatchers.status().isOk()).andReturn();
    }

    @Test
    void removesAVehicle() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.delete("/api/vehicles?id=1")).andExpect(MockMvcResultMatchers.status().isOk());
    }
}
