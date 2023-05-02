import React, { useState, useEffect } from "react";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid,Tooltip,Legend,PieChart,Pie,Cell} from "recharts";
import Histogramme from '../back/Histogramme';
import HistogrammeAvg from '../back/Histogrammeavg';
import Camembert from "../back/Camembert";


const Backoffice = () => {
    const [granularity, setGranularity] = useState("daily");
    const dailySalesData = [
        { name: "Jour 1", sales: 4000 },
        { name: "Jour 2", sales: 3000 },
        { name: "Jour 3", sales: 2000 },
        { name: "Jour 4", sales: 2780 },
        { name: "Jour 5", sales: 1890 },
        { name: "Jour 6", sales: 2390 },
        { name: "Jour 7", sales: 3490 }
    ];
    
    const weeklySalesData = [
        { name: "Semaine 1", sales: 24000 },
        { name: "Semaine 2", sales: 21000 },
        { name: "Semaine 3", sales: 20000 },
        { name: "Semaine 4", sales: 27800 },
        { name: "Semaine 5", sales: 23900 }
    ];
    
    const categoryData = [
        { name: "Jour 1", category1: 2400, category2: 1300, category3: 980 },
        { name: "Jour 2", category1: 1398, category2: 980, category3: 390 },
        { name: "Jour 3", category1: 980, category2: 390, category3: 200 },
        { name: "Jour 4", category1: 390, category2: 200, category3: 480 },
        { name: "Jour 5", category1: 480, category2: 290, category3: 380 },
        { name: "Jour 6", category1: 290, category2: 480, category3: 430 },
        { name: "Jour 7", category1: 480, category2: 380, category3: 430 }
    ];
    
    const pieChartData = [
        { name: "Catégorie 1", value: 400 },
        { name: "Catégorie 2", value: 300 },
        { name: "Catégorie 3", value: 200 },
        { name: "Catégorie 4", value: 100 }
    ];

    return ( 
    <div>
        <h1>Tableau de bord</h1>

        <div>
            <h2>Ventes totales</h2>
                
                <Histogramme data={granularity === "daily" ? dailySalesData : weeklySalesData} granularity={granularity} />
                <button onClick={() => setGranularity("daily")}>Journalier</button>
                <button onClick={() => setGranularity("weekly")}>Hebdomadaire</button>
            <h2>Paniers moyens par catégorie</h2>
                <HistogrammeAvg data={categoryData} granularity={granularity} />
            <h2>Volume de vente par catégorie</h2>
                <Camembert data={pieChartData} />
    </div>
    </div>
    );
}
 
export default Backoffice;