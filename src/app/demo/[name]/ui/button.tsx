import { Button } from "@/components/ui/button";
import { Trash2, ArrowRight } from "lucide-react";

export const button = {
  name: "button",
  components: {
    Default: <Button variant="default">Default</Button>,
    Secondary: <Button variant="secondary">Secondary</Button>,
    Outline: <Button variant="outline">Outline</Button>,
    Ghost: <Button variant="ghost">Ghost</Button>,
    Link: <Button variant="link">Link</Button>,
    Destructive: <Button variant="destructive">Destructive</Button>,
  
    // Sizes
    Small: <Button size="sm">Small</Button>,
    Large: <Button size="lg">Large</Button>,
  
    // Icon + Label
    LeadingIcon: (
      <Button variant="default">
        <ArrowRight />
        Continue
      </Button>
    ),
    TrailingIcon: (
      <Button variant="default">
        Next
        <ArrowRight />
      </Button>
    ),
  
    // Icon Only
    IconOnly: (
      <Button variant="default" size="icon" aria-label="Delete">
        <Trash2 />
      </Button>
    ),
  }  
};