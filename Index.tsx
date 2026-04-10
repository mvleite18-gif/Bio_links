import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import LeadForm from "@/components/LeadForm";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <BenefitsSection />
      <LeadForm />
      <footer className="py-12 text-center border-t border-border">
        <p className="font-display text-xl md:text-2xl text-foreground mb-3">
          2026 começa com decisão.
        </p>
        <p className="font-body text-muted-foreground mb-6 max-w-md mx-auto">
          Venha caminhar com consciência, identidade e ancestralidade.
        </p>
        <div className="font-body text-sm text-muted-foreground space-y-1">
          <p>
            <a href="https://wa.me/5521974156812" className="text-primary hover:underline">(21) 97415-6812</a>
          </p>
          <p>
            <a href="https://instagram.com/rosaperdigao" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@rosaperdigao</a>
          </p>
        </div>
        <p className="font-body text-xs text-muted-foreground mt-8">
          © {new Date().getFullYear()} Rosa Perdigão — Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
};

export default Index;
