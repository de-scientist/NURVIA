using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "NURVIA Nursing Education API",
        Version = "v1",
        Description = "Modular API for the NURVIA Nursing Exam Preparation and Learning Platform"
    });
});

// Configure CORS for Next.js frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:3000", "https://localhost:3000")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
    });
});

builder.Services.AddHealthChecks();

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "NURVIA API v1");
        c.RoutePrefix = "swagger";
    });
}

app.UseCors("AllowFrontend");

// Health and Status Endpoint
app.MapGet("/api/health", () => Results.Ok(new
{
    Status = "Healthy",
    Application = "NURVIA Core API",
    Version = "1.0.0",
    Timestamp = DateTime.UtcNow
}))
.WithName("HealthCheck")
.WithOpenApi();

// Phase 1 Sample Catalogue Discovery Endpoint
app.MapGet("/api/catalogue/summary", () => Results.Ok(new
{
    TotalExams = 142,
    Programs = new[] { "RN", "PN/LPN", "ADN", "BSN" },
    Providers = new[] { "ATI", "HESI", "NCLEX", "NURVIA Original" },
    Categories = new[]
    {
        "Fundamentals of Nursing",
        "Adult Medical-Surgical",
        "Pharmacology",
        "Dosage Calculations",
        "Maternal Newborn & Obstetrics",
        "Pediatric Nursing",
        "Mental Health",
        "Leadership & Management",
        "Comprehensive Predictor Exit Exams"
    }
}))
.WithName("GetCatalogueSummary")
.WithOpenApi();

app.Run();
